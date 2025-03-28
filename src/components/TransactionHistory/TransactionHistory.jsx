import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th className={s.th}>Type</th>
            <th className={s.th}>Amount</th>
            <th className={s.th}>Currency</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {items.map(item => {
            return (
              <tr className={s.tr} key={item.id}>
                <td className={s.td}>{item.type}</td>
                <td className={s.td}>{item.amount}</td>
                <td className={s.td}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
