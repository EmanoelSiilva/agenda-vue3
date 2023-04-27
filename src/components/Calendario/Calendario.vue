<template>
    <FullCalendar  :options="opcoesCalendario"/>
</template>
  <script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import listPlugin from '@fullcalendar/list'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import esLocale from '@fullcalendar/core/locales/pt-br';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import bootstrap5Plugin from '@fullcalendar/bootstrap5';
  
  export default {
    components: {
      FullCalendar
    },
    data() {
      return {
        opcoesCalendario: {
          plugins: [ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin, bootstrap5Plugin ],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'timeGridDay, dayGridWeek, dayGridMonth, listDay' // user can switch between the two
          },
          selectable: true,
          editable: true,
          locale: esLocale,
          // select: this.selecionaData,
          eventClick: this.eventClick,
          themeSystem: 'bootstrap5',
          height: 650,
          events: [
          {
            title: 'Meeting',
            start: '2019-08-12T14:30:00',
            extendedProps: {
              status: 'done'
            }
          },
          {
            title: 'Birthday Party',
            start: '2019-08-13T07:00:00',
            backgroundColor: 'green',
            borderColor: 'green'
          }
          ]
        }
      }
    },
    methods: {
      selecionaData(arg) {
        id.value = id.value += 1

        const cal = arg.view.calendar
        cal.unselect()
        cal.addEvent({
          id: `${id.value}`,
          title: 'Novo agendamento',
          start: arg.start,
          end: arg.end,
          allDay: true
        })
      },

      eventClick(arg) {
        alert(arg.event.title)
      }
    }
  }
  </script>