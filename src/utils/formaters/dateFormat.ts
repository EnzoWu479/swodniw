import { format, parseISO } from "date-fns";
import pt from 'date-fns/locale/pt-BR';

export default (date: string, pattern?: string) => {
  try {
    return format(parseISO(date), pattern ?? "dd/MM/yyyy", {locale: pt});
  } catch {
    return date;
  }
};
