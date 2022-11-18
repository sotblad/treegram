class FollowsController<ApplicationController
  helper_method :follows

  def new
    @user = User.find(params[:user_id])
    @follow = Follow.create()
  end

  def follows(followee)
    return Follow.find_by(follower: params[:user_id], followee: followee)
  end

  def unfollow
    Follow.delete_all(follower: params[:user_id], followee: params[:follow_id])
    redirect_to new_user_follow_path
  end

  def create
    @follow = Follow.create({follower: params[:user_id], followee: params["followee"]})
    redirect_to new_user_follow_path
  end

  def view
    redirect_to user_path(session[:user_id])
  end

  def index
     @user = User.find(params[:follow][:user_id])
     @follow = Follow.create({user_id: params[:follow][:user_id]})
  end

end
