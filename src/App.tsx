import './styles.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

// const user = {
//   id: 1,
//   name: 'じゃけえ',
//   email: 'dfhakh@aaa.com',
//   address: 'address'
// };

export default function App() {
  const {
    getUsers,
    userProfiles,
    loading,
    error
  } = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>
        データを取得
      </button>
      <br />
      {error ? (
        <p style={{ color: 'red' }}>
          データの取得に失敗しました
        </p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
