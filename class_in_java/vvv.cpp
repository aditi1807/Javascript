int solution(vector<int> &v, int x, int y)
{
     int n=v.size();
    vector<int>dp(n+1,0);
    for(int i=0;i<n;i++)
    {
        dp[i+1]=v[i];
        if(i>=y-1)
        dp[i+1]+=dp[i+1-y];
    }

    for(int i=0;i<=n;i++)
    cout << dp[i] << " ";
    cout << endl;
    int len = y*(x-1);
    int ans=INT_MAX;
    for(int i=len+1;i<=n;i++)
    {
        int z=0;
        if(i>=x*y)
        {
            z=dp[i-(x*y)];
        }
        ans=min(ans,dp[i]-z);
    }
    return ans;
}
