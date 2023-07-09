import { Beatmap } from 'rosu-pp';

export default eventHandler(() => {
  const test = new Beatmap();
  return { nitro: 'Is Awesome!' }
})
