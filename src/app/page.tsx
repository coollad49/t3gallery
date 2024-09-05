
export default function HomePage() {

  const mockUrl = [
    'https://utfs.io/f/90b2c8de-660e-43bb-b38b-293635baa99c-1jqe77.jpg',
    'https://utfs.io/f/701e23ad-041d-404d-b397-0d66da53722e-we32fm.jpg',
    'https://utfs.io/f/f8138776-70e9-4dfe-8da7-bb91e2633d73-2dgh.jpg',
    'https://utfs.io/f/62355d6c-4f9b-4712-bf1b-c11f6077d862-qeismh.jpg'
  ];

  const mockImages = mockUrl.map((url, idx)=>({
    id: idx + 1,
    url
  }))

  return (
    <main className="">
      <div className="flex gap-4 flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages].map((img)=>(
          <div key={img.id}>
            <img src={img.url} className="w-48 h-40" />
          </div>
        ))}
      </div>
    </main>
  );
}
