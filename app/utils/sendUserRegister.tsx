const sendUserRegister = async (
  name: string,
  surName: string,
  email: string,
  dni: number,
  pass: string,
  date: string
) => {
  try {
    const response = await fetch("http://192.168.0.19:8080/register/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        apellido: surName,
        email: email,
        dni: dni,
        pass: pass,
        fechaNac: date,
      }),
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log('Erroooor', error)
    return { success: false, error };
  }
};

export default sendUserRegister;
