import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  // beforeEach();
  it('renders h1 tag', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('h1').text()).equal('Corkd');
  });
});
