const API = process.env.API ?? '';

export function apiFetch(url: string, config?: RequestInit) {
  return fetch(`${API}${url}`, {
    ...config,
    mode: 'cors',
  });
}

export function GET(url: string, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'GET',
  });
}

export function POST(url: string, data?: any, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function PUT(url: string, data?: any, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function PATCH(url: string, data?: any, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function DELETE(url: string, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'DELETE',
  });
}
