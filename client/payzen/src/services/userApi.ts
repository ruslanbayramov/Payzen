export async function login(email: string, password: string) {
  const res = await fetch("http://127.0.0.1:8080/api/v1/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.trim(),
      password: password.trim(),
    }),
  });

  const data = await res.json();
  return data;
}
