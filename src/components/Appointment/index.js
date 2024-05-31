import './style.css'

function Appointment() {
    return (
        <div className='container-appointment'>
            <div className='menu-appointment'>
                <div className='search'>
                    <input
                        type="text"
                        placeholder="Tìm kiếm lịch hẹn..."
                        className="search-input"
                    />
                    <button className="search-button">Tìm</button>
                </div>

                <button className="add-button">Thêm</button>
            </div>
            <div className='main-appointment'>
                <div className='list-appointment'>
                    <div className='personalInformation'>
                        <div className='schedule'>Lich hen</div>
                        <div className='patient'>Benh nhan</div>
                        <div className='doctor'>Bac si</div>
                    </div>

                    <div className='date'>
                        <div className='start-date'>Ngay bat dau</div>
                        <div className='end-date'>Ngay ket thuc</div>
                    </div>
                </div>

                <div className='list-appointment'>
                    <div className='personalInformation'>
                        <div className='schedule'>Lich hen</div>
                        <div className='patient'>Benh nhan</div>
                        <div className='doctor'>Bac si</div>
                    </div>

                    <div className='date'>
                        <div className='appointmentDate'>Ngay hen</div>
                        <div className='start-date'>Ngay bat dau</div>
                        <div className='end-date'>Ngay ket thuc</div>
                    </div>
                </div>

                <div className='list-appointment'>
                    <div className='personalInformation'>
                        <div className='schedule'>Lich hen</div>
                        <div className='patient'>Benh nhan</div>
                        <div className='doctor'>Bac si</div>
                    </div>

                    <div className='date'>
                        <div className='start-date'>Ngay bat dau</div>
                        <div className='end-date'>Ngay ket thuc</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Appointment;