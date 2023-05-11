const fetchGameDetailsz = async () => {
  const apiKey = '3cf4f9ea58da46afa7bdc7f1679a8629';
  const gameId = '12020';
  const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);
  const data = await response.json();
  console.log(data);
};
export default fetchGameDetailsz;