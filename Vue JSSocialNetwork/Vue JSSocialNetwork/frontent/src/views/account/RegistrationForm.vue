<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Register</h3>
        <p class="subtitle has-text-grey">Please enter your information</p>
        <div class="box">
          <!-- @submit handles any form of submission. -->
          <!-- .prevent keeps the event from bubbling around and doing anything else. -->
          <form @submit.prevent="handleSubmit">
            <div class="field">
              <div class="control">
                <input
                  class="input is-large"
                  type="text"
                  placeholder="First name"
                  v-model="user.firstName"
                  autofocus=""
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-large"
                  type="text"
                  placeholder="Last name"
                  v-model="user.lastName"
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-large"
                  type="email"
                  placeholder="Email"
                  v-model="user.email"
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-large"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-large"
                  type="text"
                  placeholder="Location"
                  v-model="user.location"
                />
              </div>
            </div>
            <Spinner v-bind:show="isBusy" />
            <button
              class="button is-block is-info is-large is-fullwidth"
              type="submit"
            >
              Submit
            </button>
            <div class="errors-container" v-if="errors">
              {{ errors }}
            </div>
          </form>
        </div>
        <p class="has-text-grey">
          <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import Spinner from '@/components/Spinner.vue'; // @ is an alias to /src
import { accountService } from './../../services/account.service';

export default {
  name: 'RegistrationForm',
   data: function(){  
    return { 
      isBusy: false,
      errors: '',
      user:{email: '',password: '',firstName:'',lastName: '',location: ''}
       };
       },
       methods:{
       handleSubmit() {
  this.isBusy = true;
  accountService.register(this.user).finally(() => this.isBusy = false)
    .subscribe((result) => {
      this.$router.push({name: 'login', query: { new: 'true', firstName: this.user.firstName, email: this.user.email }});
    },
    (errors) =>  this.errors = errors);
}
}
}
</script>

<style lang="scss" scoped>
</style>
 