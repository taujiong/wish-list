export const ensureSuccessfultRes = async (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  const errorMessage = await res.text();
  throw new Error(errorMessage);
};

export const handleError = (err: any) => {
  if (err instanceof Error) {
    alert(err.message);
    return;
  }

  alert('发生了未知错误，请尝试重启应用');
};
