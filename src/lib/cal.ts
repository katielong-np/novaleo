import { createServerFn } from '@tanstack/react-start';

const CAL_API_KEY = "cal_live_ad25597eb1b5d86451ff91803b49dc96";
const EVENT_TYPE_ID = 5912238; // Free 30 min call with Katie

export const getAvailableSlots = createServerFn({ method: 'GET' })
  .handler(async ({ data }: { data: { startDate: string; endDate: string } }) => {
    try {
      const url = `https://api.cal.com/v2/slots/available?eventTypeId=${EVENT_TYPE_ID}&startTime=${data.startDate}&endTime=${data.endDate}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${CAL_API_KEY}`,
          'cal-api-version': '2024-08-13'
        },
      });

      if (!response.ok) {
        console.error(`Cal.com API error: ${response.status} ${response.statusText}`);
        return {};
      }

      const json = await response.json();
      return json.data?.slots || {};
    } catch (error) {
      console.error('Error fetching Cal.com slots:', error);
      return {};
    }
  });

export const createBooking = createServerFn({ method: 'POST' })
  .handler(async ({ data }: { data: { start: string; name: string; email: string; phone: string; timeZone: string } }) => {
    try {
      let formattedPhone = data.phone || undefined;
      if (formattedPhone) {
        // Strip everything except digits and leading plus
        formattedPhone = formattedPhone.replace(/(?!^\+)[^\d]/g, '');
        // Default to US country code if missing
        if (!formattedPhone.startsWith('+')) {
          formattedPhone = '+1' + formattedPhone;
        }
      }

      const url = `https://api.cal.com/v2/bookings`;
      const payload = {
        start: data.start,
        eventTypeId: EVENT_TYPE_ID,
        attendee: {
          name: data.name,
          email: data.email,
          timeZone: data.timeZone,
          phoneNumber: formattedPhone,
          language: "en"
        }
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CAL_API_KEY}`,
          'cal-api-version': '2024-08-13',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Cal.com Booking API error: ${response.status} ${errorText}`);
        return { success: false, error: errorText };
      }

      const json = await response.json();
      return { success: true, data: json.data };
    } catch (error) {
      console.error('Error creating Cal.com booking:', error);
      return { success: false, error: 'Internal server error' };
    }
  });
