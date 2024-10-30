const sendMail = async (email: any) => {
  try {
    const response = await fetch("http://192.168.0.19:8080/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Recuperacion de contraseña!",
        text: "Este es un mail para recuperar la contraseña",
      }),
    });
    if (response.ok) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false, error };
  }
};

export default sendMail;
