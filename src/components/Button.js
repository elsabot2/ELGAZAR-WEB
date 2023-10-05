
const Button = () => {
    // Ketika di klik akan muncul alert
    const handleClick = () => {
        alert('Halo Rek')
    }
  return (
    <div>
        <button onClick={handleClick}>Click Saya</button>
    </div>
  )
}

export default Button
