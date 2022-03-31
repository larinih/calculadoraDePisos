const $ = document.querySelector.bind(document)

const calculateResult = (event) => {
  event.preventDefault()

  const widthValue = convertStringToFloat('width')
  const lengthValue = convertStringToFloat('length')
  const floorType = convertStringToFloat('floor-type')

  const totalPrice = calculatetotalPrice(widthValue, floorType, lengthValue)

  $('#result1').innerText = `Quantidade de piso a ser comprada:  ${(widthValue*lengthValue).toFixed(2)} m²`
  $('#result').innerText = `Valor da compra: R$ ${totalPrice.toFixed(2)}`
}

/**
 * Gets the value of a HTML input and converts it to a float number
 * @param {string} id An id from a HTML input without the hash
 * @returns The value of the input converted to a float number
 */
const convertStringToFloat = (id) => {
  let aux = $(`#${id}`).value
  const value = parseFloat(aux)
  return value
}

/**
 * Calculates the amount of flooring to be purchased, in addition to the purchase price
 * @param {number} widthValue The width's value
 * @param {number} floorTy floor typespe 
 * @param {number} lengthValue The length's value
 * @returns Returns the purchase price
 */
const calculatetotalPrice = (widthValue, floorType, lengthValue) => {
  const totalArea = widthValue * lengthValue
  const totalPrice = totalArea * floorType
  return totalPrice
}