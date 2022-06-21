import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/modules/app/ui/App.vue';

const wrapper = mount(App, {
  stubs: ['default-layout', 'router-view'],
});

describe('Test modules/app/ui/App.vue', () => {
  it('ui name should be App', () => {
    const componentName = 'App';
    expect(wrapper.vm.$options.name).toBe(componentName);
  });

  it('computed layout should return default-layout', () => {
    const layoutData = 'default-layout';
    expect(wrapper.vm.layout).toMatch(layoutData);
  });

  it('computed layout should return custom-layout', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const router = new VueRouter({
      routes: [
        {
          name: 'custom',
          path: '/',
          meta: {
            layout: 'custom',
          },
        },
      ],
    });

    const wrapperRouter = mount(App, {
      localVue,
      router,
      stubs: ['custom-layout'],
    });

    const layoutData = 'custom-layout';

    expect(wrapperRouter.vm.layout).toMatch(layoutData);
  });
});
