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

export async function signup(
  name: string,
  surname: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  const res = await fetch("http://127.0.0.1:8080/api/v1/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    }),
  });

  const data = await res.json();
  return data;
}
