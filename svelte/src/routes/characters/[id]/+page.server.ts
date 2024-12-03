type Params = {
  params: { id: string };
};

export async function load({ params }: Params) {
  return { id: params.id };
}
