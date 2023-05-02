<template>
    <div>
      <FullCalendar  
        :options="opcoesCalendario"
      />
      <p>oi</p>
      
    </div>

    <div v-if="modalVisivel">
      <div>
          <span>
              person
          </span>
          <input type="text" placeholder="Evento" v-model="evento">
      </div>
      <div>
          <span>
              schedule
              <input type="time"  placeholder="Início" v-model="inicio"/>
              <input type="time"  placeholder="Fim"  v-model="fim"/>
          </span>
      </div>
      <div>
          <button @click="click">aplicar</button>
      </div>
    </div>
    
</template>
  <script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import listPlugin from '@fullcalendar/list'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import brLocale from '@fullcalendar/core/locales/pt-br';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import bootstrap5Plugin from '@fullcalendar/bootstrap5';
  import Swal from 'sweetalert2'

  export default {
    components: {
    FullCalendar,
  },
    data() {
      return {
        opcoesCalendario: {
          plugins: [ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin, bootstrap5Plugin ],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'timeGridDay, dayGridWeek, dayGridMonth'
          },
          selectable: true,
          editable: true,
          locale: brLocale,
          select: this.selecionaData,
          eventClick: this.handleDateClick,
          themeSystem: 'bootstrap5',
          height: 650,
          events: [
            // {
            //   title: 'Evento 1',
            //   start: '2023-04-28'
            // },
            // {
            //   title: 'Evento 2',
            //   start: '2023-04-30',
            //   end: '2023-05-02'
            // }
          ],
          // dateClick: this.handleDateClick
        },
        modalVisivel: false,
        evento: '',
        inicio: null,
        fim: null
      }
    },
    methods: {
      selecionaData(arg) {
      Swal.fire({
        html:
            '<div class="mb-7">Criar um novo evento?</div><div class="fw-bold mb-5">Evento:</div><input type="text" class="form-control" name="event_name" />',
        icon: "info",
        showCancelButton: true,
        buttonsStyling: true,
        confirmButtonText: "Sim, criar!",
        cancelButtonText: 'Não, não crie!'
       }).then((result) => {
        if (result.value) {
          const title = document.querySelector(
            'input[name="event_name"]'
          ).value
          if (title) {
            this.opcoesCalendario.events.push({
              title: title,
              start: arg.start,
              end: arg.end,
              allDay: arg.allDay
            })
          }
        } else if (result.dismiss === 'cancel') {
          Swal.fire({
            text: "Evento não criado",
            icon: "error",
            buttonsStyling: true,
            confirmButtonText: "Ok",
          })
        }
       })
      },

      eventClick(arg) {
        alert(arg.event.title)
      },

      handleDateClick(info) {
        this.modalVisivel = true
        this.opcoesCalendario.events.push({
          title: 'title',
          start: info.date
        })
      },

      click() {
        console.log(this.evento)
      }
    },
    mounted() {
      console.log(this.inicio)
    }
  }
  </script>