import { shallowMount } from '@vue/test-utils';
import ProductList from '@/components/ProductList.vue';
import axios, { AxiosPromise } from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(() => {
    const response = {
      data: {
        meals: [{ idMeal: '1', strMeal: '', strMealThumb: '' }]
      }
    };
    return Promise.resolve(response);
  }),
}));

describe('App.vue', () => {
  it('expect product list to be empty', () => {
    const wrapper = shallowMount(ProductList);
    expect(wrapper.vm.$data.products.length === 0).toBe(true);
  });

  it('expect product list to be filled', async () => {

    const wrapper = shallowMount(ProductList);
    (axios.get as jest.Mock).mockReturnValue([{ idMeal: '1', strMeal: '', strMealThumb: '' }]);

    await wrapper.vm.$nextTick();
    expect(axios.get).toHaveBeenCalled();
    expect(wrapper.vm.$data.products.length > 0).toBe(true);

  });
});
