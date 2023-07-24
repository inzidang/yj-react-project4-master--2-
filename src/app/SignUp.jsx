import React, { useState } from "react";
import Layout from "../components/Layout";
import ButtonSlide from "../components/ButtonSlide";
import LayoutContents from "../components/LayoutContents";
import { useForm} from "react-hook-form";
import { Model } from "react-model";

export default function SignUp() {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    const [modalIsOpen, setIsOpen] = useState(false);
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState:{errors},
} = useForm({mode:"onChange"});
const openModal = () => {
setIsOpen(true);
};

const closeModal= () => {
setIsOpen(false);
};

return (
<Layout>
        <Model
            isOpen={modalIsOpen}
            style = {customStyles}
            onRequestClose={closeModal}
            
        ></Model>
    <LayoutContents>
        <form>
        <table className="table_top w-full">
            <tbody>
                <tr>
                    <td className="table_td border-1-0">회원아이디</td>
                    <td className="table_td border-1-0 space-x-2">
                        <input 
                        {...register("usename", {
                        required:"아이디는 필수 입력항목입니다.",
                    minLength:{value: 6, message:"아이디는 6자이상 입력해야 합니다."},
            })}
                        type="text" className="border border-neutral-300 p-2" />
                    </td>
                </tr>
                <tr>
                    <td className="table_td border-1-0">비밀번호</td>
                    <td className="table_td border-1-0">
                        <input 
                        {...register("pasword")}
                        type="password" className="border border-neutral-300 p-2" />
                        <span className="text-red-500 text-sm">
                            {errors?.username?.message}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className="table_td border-1-0">비밀번호 확인</td>
                    <td className="table_td border-1-0">
                        <input
                        {...register("pasword2")}
                        type="password" className="border border-neutral-300 p-2"/>
                    </td>
                </tr>
                <tr>
                    <td className="table_td border-1-0">이름</td>
                    <td className="table_td border-1-0">
                        <input
                        {...register("name")}
                        type="text" className="border border-neutral-300 p-2"/>
                    </td>
                </tr>
                <tr>
                    <td className="table_td border-1-0">휴대전화</td>
                    <td className="table_td border-1-0">
                        <input 
                        {...register("mobile")}
                        type="text" className="border border-neutral-300 p-2"/>
                            {watch("password") !== watch("password2") && (
                        <span className="text-red-500 text-sm">
                             비밀번호는 같아야 합니다.   
                        </span>
                            )}
                    </td>
                </tr>
               <tr>
                    <td className="table_td border-1-0">이메일</td>
                    <td className="table_td border-1-0">
                        <input 
                        {...register("email", {
                            required: "이메일 항목은 필수 입력사항입니다.",
                            minLength: {
                            value: 5,
                            message: "최소 5자 이상 작성해 주셔야 합니다."
                        },
                        pattern: {
                            value:/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                            message:"이메일 형식을 맞춰 주셔야 합니다."
                        },
                        })}
                        type="email" className="border border-neutral-300 p-2"/>
                       <span className="text-red-500 text-sm">
                            {errors?.username?.message}
                        </span>
                    </td>
                </tr>   
               <tr>
                    <td className="table_td border-1-0">주소</td>
                    <td className="table_td border-1-0">
                    <div className="space-x-1">
                        <input 
                        {...register("zipcode")}
                        disabled type="text" className="border border-neutral-300 p-2 bg-neutral-50"/>
                        <button  
                        onClick={openModal}
                        type="button" className="px-4 py-2 rounded text-sm border border-neutral-300 hover:shadow-sm">
                            우편번호검색
                        </button>
                        </div>
                        <input 
                        {...register("address1")}
                        disabled type="text" className="w-full border border-neutral-300 p-2 bg-neutral-50"/>
                        <input 
                        {...register("address2")}
                        disabled type="text" className="w-full border border-neutral-300 p-2"/>
                    </td>
                </tr>   
            </tbody>
        </table>
        <div className="w-full flex justify-center border-t border-neutral-300 py-8 space-x-2">
            <ButtonSlide text="회원가입" />
            <ButtonSlide text="메인으로" />
        </div>
        </form>
    </LayoutContents>
 </Layout>
 )
};