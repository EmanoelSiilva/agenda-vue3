<template>

<header><h1>OGENDAMENTO</h1></header>

<div class="main-container">
    <div class="calendario-container">
      <FullCalendar  
        :options="opcoesCalendario"
        :event-color=this.eventColor
      >
    
    
    </FullCalendar>
      
    </div>
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
  import timeGridPlugin from '@fullcalendar/timegrid'
  import listPlugin from '@fullcalendar/list'

  import interactionPlugin from '@fullcalendar/interaction'
  import brLocale from '@fullcalendar/core/locales/pt-br';
  import Swal from 'sweetalert2'
  

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
            right: 'timeGridDay, dayGridWeek, dayGridMonth, list'
          },
          eventColor:'#FF7A00',
          selectable: true,
          editable: true,
          locale: brLocale,
          select: this.selecionaData,
          eventClick: this.delete,
          themeSystem: 'false',
          height: 650,
          dayMaxEvents: true,
          events: [],

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
              '<div class="mb-7">Criar um novo evento?</div><div class="fw-bold mb-5">Evento:</div><input type="text" class="form-control" name="event_name" /> <div class="fw-bold mb-5">Horário:</div><input type="time" class="form-control" name="event_time" />',
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
            const start = document.querySelector(
              'input[name="event_time"]'
            ).value
            const data = arg.startStr
            if (title) {
              this.opcoesCalendario.events.push({
                title: title,
                start:`${data}T${start}`,
                // end: arg.end,
                allDay: false
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
        console.log(arg.start)
      },

      delete(arg) {
        Swal.fire({
          text: "Você tem certeza que deseja deletar esse evento?",
          icon: "warning",
          showCancelButton: true,
          buttonsStyling: true,
          confirmButtonText: "Sim, delete!",
          cancelButtonText: "Não, não delete!"
        }).then((result) => {
          if (result.value) {
            arg.event.remove()
          } else if (result.dismiss === 'cancel') {
            Swal.fire({
              text: "Evento não deletado.",
              icon: "error",
              buttonsStyling: true,
              confirmButtonText: "Ok"
            })
          }
        })
      },

    },
    mounted() {
      console.log(this.inicio)
    }
  }
  </script>