<template>
<div> 
<section class="hero is-info">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Hello, {{profile.firstName}}  {{profile.lastName}}
      </h1>
      <h2 class="subtitle">
        Welcome back!
      </h2>
    </div>
  </div>
</section> 
 <section class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="card">          
          <div class="card-content">
            <div class="content">
              <h4>You've reached a protected area!</h4>
              <Spinner v-bind:show="isBusy" />
              <p v-if="homeData.message">{{homeData.message}}</p>              
              <p v-if="homeData.firstName"><strong>Name:</strong> {{name}}</p> 
              <p v-if="homeData.location"><strong>Location:</strong> {{homeData.location}}</p>   
              <p v-if="homeData.locale"><strong>Locale:</strong> {{homeData.locale}}</p>       
              <p v-if="homeData.gender"><strong>Gender:</strong> {{homeData.gender}}</p> 
              <p v-if="homeData.facebookId"><strong>Facebook Id:</strong> {{homeData.facebookId}}</p> 
              <div v-if="homeData.pictureUrl"><img :src="homeData.pictureUrl" /></div>                 
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
 </div>
</template>

<script >
import Spinner from '@/components/Spinner.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import { dashboardService } from '../../services/dashboard.service';

export default {
    name: 'DashboardHome',
    data: function () {
    return { 
      isBusy: false,
      homeData:{}
       };  
  },
  methods:{
      name() {
      return this.homeData.firstName + ' ' + this.homeData.lastName;
  }
  },
  computed: mapGetters({
    profile: 'user/profile',
  }),

  components: {
    Spinner,
  },
  
  created() {
     this.isBusy = true;
     dashboardService.getHomeDetails().then((resp) => {
        this.homeData = resp.data;
        this.isBusy = false;
     });
  }
}
</script>