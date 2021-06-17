<template>
  <div class="login-page">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="Activity name" v-bind="validateInfos.name">
            <a-input v-model:value="modelRef.name" />
          </a-form-item>
          <a-form-item label="Sub name" v-bind="validateInfos['sub.name']">
            <a-input v-model:value="modelRef.sub.name" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
            <a-button style="margin-left: 10px" @click="reset">Reset</a-button>
          </a-form-item>
        </a-form>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent, reactive, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      sub: {
        name: '',
      },
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: 'Please input name',
          },
        ],
        'sub.name': [
          {
            required: true,
            message: 'Please input sub name',
          },
        ],
      }),
    );

    const onSubmit = () => {
      validate()
        .then(res => {
          console.log(res, toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };

    const reset = () => {
      resetFields();
    };

    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
});
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