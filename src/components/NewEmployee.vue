<template lang="html">
  <div id="new-employee">
    <h3>New Employee</h3>
    <div class="row">
      <form class="col s12" @submit.prevent="addEmployee">
        <div class="row">
          <div class="input-field col s12">
            <input name="id" type="text" v-model="employee_id" required>
            <label for="id">Employee ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input name="id" type="text" v-model="name" required>
            <label for="id">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input name="id" type="text" v-model="dept" required>
            <label for="id">Department</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input name="id" type="text" v-model="position" required>
            <label for="id">Position</label>
          </div>
        </div>
        <button type="submit" class="btn" name="button">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from '../firebase/firebaseInit'
export default {
  name:'new-employee',
  data () {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null
    }
  },
  methods: {
    addEmployee(){
      db.collection('employees').add({
        employee_id: this.employee_id,
        name: this.name,
        dept: this.dept,
        position: this.position
      })
      .then(docRef => this.$router.push('/'))
      .catch(error => console.log(err))
    }
  }
}
</script>

<style lang="css">
</style>
