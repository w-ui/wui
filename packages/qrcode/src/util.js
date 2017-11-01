export default class Util {
  static createCanvas (el, size, image, fillType = 'fill', show = false) {
    let canvas = document.createElement('canvas')
    canvas.id = 'cursorLayer'
    if (!show) {
      canvas.style.position = 'absolute'
      canvas.style.left = '-2000px'
      canvas.style.top = '0px'
    }
    el.appendChild(canvas)
    canvas.width = size
    canvas.height = size
    if (image) {
      switch (fillType) {
        case 'fill' :
          canvas.getContext('2d').drawImage(image, 0, 0, size, size)
          break
        case 'scale_to_fit':
          var wrh = image.width / image.height
          var newWidth = canvas.width
          var newHeight = newWidth / wrh
          if (newHeight > canvas.height) {
            newHeight = canvas.height
            newWidth = newHeight * wrh
          }
          var x = (canvas.width - newWidth) * 0.5
          var y = (canvas.height - newHeight) * 0.5
          canvas.getContext('2d').drawImage(image, x, y, newWidth, newHeight)
          break
      }
    }
    return canvas
  }

  static threshold (r, g, b, value) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b >= value) ? 255 : 0
  }
}
