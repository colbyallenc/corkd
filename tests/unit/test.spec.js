import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Home.vue', () => {
  it('renders h1 tag', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.find('h1').text()).equal('Corkd');
  });
});
