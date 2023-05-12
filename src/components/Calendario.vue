<template id="my-template">

<header>
  <h1>OGENDAMENTO</h1>
</header>


<div class="main-container" id="main-container-calendario">

  <aside class="sidebar-container">
    <Sidebar/>
  </aside>

     <div class="calendario-container">


      <FullCalendar  
        :options="opcoesCalendario"
        @eventClick="handleEventClickGetInfo()"
      />
    

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
 
  import Sidebar from './Sidebar.vue'



  export default {
    components: {
    FullCalendar, Sidebar
  },
    data() {
      return {
        opcoesCalendario: {
          plugins: [ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin, bootstrap5Plugin ],
          initialView: '',
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
          eventClick: this.editar,
          selectLongPressDelay: this.selecionaData,
          themeSystem: 'false',
          height: 650,
          dayMaxEvents: true,
          // listDayFormat: 'dddd, MMMM D, YYYY',
          events: [],
          // dateClick: this.handleEventClick(),

        },
        modalVisivel: false,
        evento: '',
        inicio: null,
        fim: null,
      }
    },

    computed: {

      isMobile() {
        return window.innerWidth <= 768 && window.innerHeight <= 1024;
      },

      display(){
        if(this.isMobile === true){
          return 'timeGridDay'
        }
      }


    },


    methods: {



      selecionaData(arg) {
        Swal.fire({
          html:
              '<div class="mb-7">Criar um novo evento?</div><div class="fw-bold mb-5">Evento:</div><input type="text" class="form-control" name="event_name" placeholder="Meu evento"/> <div class="fw-bold mb-5">Horário:</div><input type="time" class="form-control" name="event_time" />',
          icon: "info",
          showCancelButton: true,
          buttonsStyling: true,
          confirmButtonText: "Sim, criar!",
          cancelButtonText: 'Não, não crie!',

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
                start:`${data}T${start}:00`,
                // end: arg.end,
                allDay: false
              })
            }

            console.log(this.opcoesCalendario.events)

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
        console.log(this.opcoesCalendario.events, arg.event)
      },

      editar(arg) {
        Swal.fire({
          // text: "Você tem certeza que deseja deletar esse evento?",
          html: '<div class="mb-7">Edite seu evento</div><div class="fw-bold mb-5">Evento:</div><input type="text" class="form-control" name="event_name" placeholder="Edite seu evento aqui"/> <div class="fw-bold mb-5">Horário:</div><input type="time" class="form-control" name="event_time" />',
          icon: "question",
          showCancelButton: true,
          buttonsStyling: true,
          confirmButtonText: "Editar evento!",
          cancelButtonText: "Excluir evento!",
          showCloseButton: true,
          type: ''
        }).then((result) => {
          const title = document.querySelector(
              'input[name="event_name"]'
            ).value
          const start = document.querySelector(
            'input[name="event_time"]'
          ).value
          if (result.value) {
            Swal.fire({
              text: "Evento editado com sucesso!",
              icon: "success",
              buttonsStyling: true,
              confirmButtonText: "Ok"
            })
            arg.event.setProp('title', title)
            arg.event.setDates(`${data}T${start}:00`)
          } else if (result.dismiss === 'cancel') {
            Swal.fire({
              text: "Você tem certeza que deseja excluir esse evento?",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: "Sim",
              cancelButtonText: "Não",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  text: "Evento excluido",
                  icon: "error",
                  buttonsStyling: true,
                  confirmButtonText: "Ok"
                })
                arg.event.remove()
                console.log(this.opcoesCalendario.events, arg.event)
              }
            })
          }
        })
      },

      handleEventClickGetInfo(info){
        console.log(info, 'oi')
      },



      teste() {
        alert('HJ TEM?')
      }
    },

    beforeMount() {
    
      if(this.isMobile === true){
        this.opcoesCalendario.initialView = this.display
      }
      


    },
    mounted(){
      console.log(this.opcoesCalendario.events)
    }
  }
  </script>