export async function useGetData() {
  try {
    const response = await fetch("http://192.168.0.19:8080/datos/usuarios");

    if (response.ok) {
      const resData = await response.json();
      return resData;
    } else {
      return { success: false, message: "Error en get" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error en get" };
  }
}
