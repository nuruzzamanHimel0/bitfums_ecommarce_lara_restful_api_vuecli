<template>
    <div>
        <div class="card m-auto w-50">
            <div class="card-header">   
                <h3>REGISTER FORM</h3>
            </div>
            <div class="card-body">
                <div class="">
                    <div class="form-group">
                        <!-- {{ user.name }} -->
                        <label for="username">Name</label>
                        <input type="test"  v-model="user.name" class="form-control" id="username" placeholder="Enter User name">
                     
                    </div>
                    <div class="form-group">
                        <label for="useremail">Email address</label>
                        <input type="email" v-model="user.email" class="form-control" id="useremail" aria-describedby="emailHelp" placeholder="Enter email">
                     
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                   
                    <button type="submit"  @click.prevent="userRegister" class="btn btn-primary">Register Submit</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                name:'',
                email:'',
                password:''
            }
        }
    },
     methods: {
        userRegister(){
            alert('submit');
        }
    }
}
</script>