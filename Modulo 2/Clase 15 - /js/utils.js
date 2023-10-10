/**
 * @author Alejandro Busi
 * @param {Event} e Recibe el evento del formulario
 * @returns {Object} Retorna un objeto con clave valor con la informacion de los inputs. (los inputs deben tener el atributo name)
 */
export const getFormData = (e) => {
  const formData = new FormData(e.target);
  const formObject = {};
  for (const [key, value] of formData.entries()) {
    formObject[key] = value;
  }
  return formObject;
};
