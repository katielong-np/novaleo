import { createServerFn } from '@tanstack/react-start';

const CAL_API_KEY = "cal_live_ad25597eb1b5d86451ff91803b49dc96";
const EVENT_TYPE_ID = "5912238"; // Free 15 min call with Katie

export const getAvailableSlots = createServerFn({ method: 'GET' })
  .handler(async ({ data }) => {
    try {
      const url = `https://api.cal.com/v2/slots/available?eventTypeId=${EVENT_TYPE_ID}&startTime=${data.startDate}&endTime=${data.endDate}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${CAL_API_KEY}`,
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
