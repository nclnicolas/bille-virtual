export default async function usePutAvatarUser(
  email: string | undefined,
  avatar: string | undefined
) {
  try {
    const response = await fetch(
      `http://192.168.0.19:8080/datos/usuarios/${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar,
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
