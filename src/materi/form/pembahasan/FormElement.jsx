import React from "react";

class FormElement extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `
                Nama: ${this.state.nama}
                Jurusan: ${this.state.jurusan}
                Gender: ${this.state.gender}
                Alamat: ${this.state.alamat}
                Member: ${this.state.member ? 'YES' : 'NO'}  
            `
        )
        this.setState({
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            member: false
        })
    }


    render() {
        return (
            <div style={{ margin: '100px auto', border: '1px solid grey', padding: '20px' }}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama : <input type="text"
                            name="nama"
                            value={this.state.nama}
                            onChange={e => this.setState({ nama: e.target.value })}
                        />
                    </label>
                    <br /><br />
                    <label>
                        Jurusan : <select
                            name="jurusan"
                            onChange={e => this.setState({ jurusan: e.target.value })}
                        >
                            <option value="Pilih Jurusan">Pilih Kelas</option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Android Developer">Android Developer</option>
                            <option value="AI Engineer">AI Engineer</option>
                            <option value="QA Engineer">QA Engineer</option>
                        </select>
                    </label>
                    <br /><br />

                    <label>
                        Jenis Kelamin :
                        <input
                            type="radio"
                            value="Laki-Laki"
                            name="gender"
                            onChange={e => this.setState({ gender: e.target.value })} />Laki-Laki

                        <input
                            type="radio"
                            value="Perempuan"
                            name="gender"
                            onChange={e => this.setState({ gender: e.target.value })} />Perempuan
                    </label>

                    <br /><br />

                    <label>
                        Alamat :
                        <textarea
                            cols="30"
                            rows="10"
                            name="alamat"
                            value={this.state.alamat}
                            onChange={e => this.setState({ alamat: e.target.value })} />
                    </label>
                    <br /><br />

                    <label>
                        Member :
                        <input
                            type="checkbox"
                            name="member"
                            checked={this.state.member}
                            onChange={e => this.setState({ member: e.target.checked })} />
                    </label>
                    <br /><br />

                    <button type="submit">Submit</button>
                </form>
            </div >
        )
    }
}

export default FormElement;