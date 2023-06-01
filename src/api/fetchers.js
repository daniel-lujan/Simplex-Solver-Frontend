const API = process.env.REACT_APP_API_URL;

export async function solve({ restrictions, objective, as_image }) {
  const res = await fetch(`${API}/solve${as_image ? "?image=true" : ""}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ restrictions, objective }),
  });

  if (res.ok) {
    if (as_image) {
      return await res.blob();
    } else {
      return await res.json();
    }
  } else {
    throw new Error("Error solving data");
  }
}
