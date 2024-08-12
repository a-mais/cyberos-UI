import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #213356;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled.div`
  width: 60%;
  margin-top: 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 35%;
  margin-top: 7rem; 
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background: #fff;
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:last-of-type {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const LogoImage = styled.img`
  width: 180px; 
  height: 180px;
  border-radius: 5%;
  cursor: pointer;
  object-fit: cover;
`;