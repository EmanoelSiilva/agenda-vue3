<template>
    <FullCalendar  :options="opcoesCalendario"/>
</template>
  <script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import listPlugin from '@fullcalendar/list'
  import timeGridPlugin from '@fullcalendar/timegrid'
  
  export default {
    components: {
      FullCalendar
    },
    data() {
      return {
        opcoesCalendario: {
          plugins: [ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin ],
          initialView: 'dayGridMonth',
          // headerToolbar: {
          //     start: '1', // will normally be on the left. if RTL, will be on the right
          //     center: '2',
          //     end: '3' // will normally be on the right. if RTL, will be on the left
          // },
          selectable: true,
          editable: true,
        }
      }
    },
    methods: {
  
    }
  }
  </script>