import { shallowMount } from '@vue/test-utils';
import LoginView from '@/components/LoginView.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(LoginView, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
