import { Hero } from '../interfaces/hero.interface';


class HeroesService {

  private apiUrl = 'http://localhost:3000';
  public numHeroes = 25;

  async getHeroes(page: number): Promise<Hero[]> {

    const queryParams = new URLSearchParams();
    queryParams.set('_page', page.toString());
    queryParams.set('_limit', '8');

    try {
      const response = await fetch(`${this.apiUrl}/heroes?${queryParams}`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch heroes');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching heroes:', error);
      throw error;
    }
  }

}

export default new HeroesService();
