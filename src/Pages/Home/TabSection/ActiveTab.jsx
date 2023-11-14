import DeveloperCard from "./DeveloperCard";


const ActiveTab = ({ users }) => {
    return (
        <div>
            <div className=' grid grid-cols-1 md:first-letter:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    users.map(user => <DeveloperCard key={user._id} user={user}></DeveloperCard>)
                }
            </div>
        </div>
    );
};

export default ActiveTab;