export default {
  render (h) {
    return (
      <div v-tap='{callback: up}'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
          <polyline stroke='#999' fill='transparent' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' points='4 7, 11 15, 18 7' />
        </svg>
      </div>
    )
  }
}
