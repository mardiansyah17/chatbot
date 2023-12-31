export default function BubleChat() {
    return (
        <>
            <div className="flex items-center mb-4 w-fit ">
                <div className="flex-none flex flex-col items-center space-y-1 mr-4"></div>
                <div className="flex-1 bg-primary text-white p-2 rounded-lg mb-2 relative">
                    <div>PHP adalah singkatan dari PHP adalah bahasa pemrograman skrip yang
                        umumnya digunakan untuk pengembangan web. PHP bersifat open source, yang berarti kode sumbernya
                        dapat diakses dan dimodifikasi oleh siapa saja. Bahasa pemrograman ini dirancang khusus untuk
                        pengembangan aplikasi web dinamis dan dapat disematkan dalam HTML.
                    </div>
                    {/* arrow */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-primary"/>
                    {/* end arrow */}
                </div>
            </div>
        </>
    );
}