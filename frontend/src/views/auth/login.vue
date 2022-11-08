<script setup>
import { ref } from "vue";
import { useAuth } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { Field, Form } from "vee-validate";
import { useRouter} from "vue-router";

import * as yup from "yup";

const schema = yup.object({
  phone: yup.string().required(),
  password: yup.string().required().min(8),
});

const auth = useAuth();
const { errors } = storeToRefs(auth);

// router

const router =useRouter()

// vee validate

const loginSubmit = async (values, { setErrors }) => {
  const res = await auth.login(values);

  if (res.data) {
    // alert("login success");
    router.push({name:index.page})
  } else {
    setErrors(res);
  }
};

const showPassword = ref(false);

const toggleShow = () => {
  showPassword.value = !showPassword.value;
};

</script>
<template>
  <div>
    <section class="user-form-part">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-6">
            <div class="user-form-card">
              <div class="user-form-title">
                <h2>Customer Login</h2>
                <p>Use your credentials to access</p>
              </div>
              <div class="user-form-group" id="axiosForm">
                <Form
                  class="user-form"
                  @submit="loginSubmit"
                  :validation-schema="schema"
                  v-slot="{ errors, isSubmiting }"
                >
                  <!--v-if-->
                  <div class="form-group">
                    <Field
                      name="phone"
                      type="text"
                      class="form-control"
                      placeholder="phone no"
                      :class="{ 'is-invalid': errors.phone }"
                    /><!--v-if-->
                    <span class="text-danger" v-if="errors.phone">{{
                      errors.phone
                    }}</span>
                  </div>

                  <div class="form-group">
                    <Field
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      placeholder="password"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <span class="text-danger" v-if="errors.password">{{
                      errors.password
                    }}</span>
                    <span @click="toggleShow" class="view-password"
                      ><i
                        class="fas text-success"
                        :class="{
                          'fa-eye-slash': showPassword,
                          'fa-eye': !showPassword,
                        }"
                      ></i></span
                    ><!--v-if-->
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="check"
                      value=""
                    /><label class="form-check-label" for="check"
                      >Remember Me</label
                    >
                  </div>
                  <div class="form-button">
                    <button type="submit" :disabled="isSubmiting">
                      login
                      <span
                        v-show="isSubmiting"
                        class="spinner-border spinner-border-sm mr-1"
                      ></span>
                    </button>
                    <p>
                      Forgot your password?<a
                        href="reset-password.html"
                        class=""
                        >reset here</a
                      >
                    </p>
                  </div>
                </Form>
              </div>
            </div>
            <div class="user-form-remind">
              <p>
                Don't have any account?
                <router-link :to="{ name: 'user.register' }"
                  >register here</router-link
                >
              </p>
            </div>
            <div class="user-form-footer"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import "@/assets/css/user-auth.css";
</style>
