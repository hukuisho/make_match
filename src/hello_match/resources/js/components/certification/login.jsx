import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Login = () => {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [targetGender, setTargetGender] = useState("");
    const [repezeni, setRepezeni] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = () => {
        axios
            .post("/login", {
                name,
                email,
                age,
                birthday,
                gender,
                targetGender,
                repezeni,
                currentAddress,
                password,
                confirmPassword,
            })
            .then((response) => {
                setIsLoggedFlag(true);
            })
            .catch((error) => {
                console.error("ログインエラー:", error);
            });
    };

    return (
        <>
            <div className="login">
                <div className="login__pair">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="ユーザー名"
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="login__pair">
                    <input
                        type="text"
                        value={repezeni}
                        onChange={(e) => setRepezeni(e.target.value)}
                        placeholder="出身地"
                    />
                    <input
                        type="text"
                        value={currentAddress}
                        onChange={(e) => setCurrentAddress(e.target.value)}
                        placeholder="在住"
                    />
                </div>
                <div className="login__pair">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="パスワード"
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="確認用パスワード"
                    />
                </div>
                <div className="login__select__pair">
                    <label>年齢</label>
                    <select
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    >
                        {Array.from({ length: 186 }, (_, index) => (
                            <option key={index + 15} value={index + 15}>
                                {index + 15}
                            </option>
                        ))}
                    </select>
                    <label>誕生日</label>
                    <DatePicker
                        selected={birthday}
                        onChange={(date) => setBirthday(date)}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="誕生日を選択"
                    />
                </div>
                <div className="login__select__pair">
                    <label>あなたの性別</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                    </select>
                    <label>対象の性別</label>
                    <select
                        value={targetGender}
                        onChange={(e) => setTargetGender(e.target.value)}
                    >
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                    </select>
                </div>

                <button onClick={handleLogin}>ログイン</button>
            </div>
        </>
    );
};

export default Login;
