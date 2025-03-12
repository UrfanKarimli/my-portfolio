// app/dashboard/layout.tsx
export default function TechLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-10 mx-5 lg:mx-9 pt-20   ">
            <div className="bg-myWhite rounded-lg overflow-hidden">
            <div className="content">{children}</div>
            </div>
        </div>
    );
}
