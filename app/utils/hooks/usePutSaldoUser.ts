export default async function usePutDSaldoUser(
  email: string | undefined,
  saldo: number | undefined
) {
  try {
    const response = await fetch(
      `http://192.168.0.19:8080/usuario/saldos/${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          saldo,
        }),
      }
    );

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
}
