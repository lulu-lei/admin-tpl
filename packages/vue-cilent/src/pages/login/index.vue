<template>
  <div class="login-page">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <a-form
          id="formLogin"
          class="user-layout-login"
          ref="formLogin"
          :form="form"
          @submit="handleSubmit"
        >
          <a-alert
            v-if="isLoginError"
            type="error"
            showIcon
            style="margin-bottom: 24px;"
            :message="$t('user.login.message-invalid-credentials')"
          />
          <a-form-item>
            <a-input
              size="large"
              type="text"
              :placeholder="$t('user.login.username.placeholder')"
              v-decorator="[
                'username',
                { rules: [{ required: true, message: $t('user.userName.required') }, { validator: handleUsernameOrEmail }], validateTrigger: 'change' }
              ]"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input-password
              size="large"
              :placeholder="$t('user.login.password.placeholder')"
              v-decorator="[
                'password',
                { rules: [{ required: true, message: $t('user.password.required') }], validateTrigger: 'blur' }
              ]"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-checkbox
              v-decorator="['rememberMe', { valuePropName: 'checked' }]"
            >{{ $t('user.login.remember-me') }}</a-checkbox>
            <router-link
              :to="{ name: 'recover', params: { user: 'aaa' } }"
              class="forge-password"
              style="float: right;"
            >{{ $t('user.login.forgot-password') }}</router-link>
          </a-form-item>

          <a-form-item style="margin-top:24px">
            <a-button
              size="large"
              type="primary"
              htmlType="submit"
              class="login-button"
              :loading="state.loginBtn"
              :disabled="state.loginBtn"
            >{{ $t('user.login.login') }}</a-button>
          </a-form-item>

          <div class="user-login-other">
            <span>{{ $t('user.login.sign-in-with') }}</span>
            <a>
              <a-icon class="item-icon" type="alipay-circle"></a-icon>
            </a>
            <a>
              <a-icon class="item-icon" type="taobao-circle"></a-icon>
            </a>
            <a>
              <a-icon class="item-icon" type="weibo-circle"></a-icon>
            </a>
            <router-link class="register" :to="{ name: 'register' }">{{ $t('user.login.signup') }}</router-link>
          </div>
        </a-form>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;

  .ant-layout {
    height: 100%;

    .ant-layout-header {
      color: #fff;
      background: #7dbcea;
    }

    .ant-layout-content {
      height: calc(100% - 64px);
    }
  }
}
</style>