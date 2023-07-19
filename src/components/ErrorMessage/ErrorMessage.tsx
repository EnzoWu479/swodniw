import { Error } from './_errormessage';

interface Props {
  error?: string;
}
const ErrorMessage = ({ error }: Props) => {
  return <Error error={error}>{error}</Error>;
};
export default ErrorMessage;